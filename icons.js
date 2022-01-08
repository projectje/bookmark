const dir = require('node-dir');
const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
const fse = require('fs-extra');
const got = require('got');
const stream = require('stream');
const { promisify } = require('util');

/**
* Downloads a favion in reverse domain name folder
*/
function downloadFavIcon(url, imgRootDir)
{
    const pipeline = promisify(stream.pipeline);
    const googleFaviconApi = 'https://s2.googleusercontent.com/s2/favicons?domain_url=';
    const imgDir = imgRootDir + url.split("/")[2].split('.').reverse().join('/');
    const iconfile = imgDir + "/favicon.png";

    fse.ensureDirSync(imgDir);

    fs.open(iconfile, 'wx', (err, fd) =>
    {
        if (err)
        {
            if (err.code === 'EEXIST')
            {
                console.log("already exists: " + url);
                return;
            }
            else
            {
                throw err;
            }
        }

        console.log("Downloading favicon for: " + url);
        got(googleFaviconApi + url)
            .then(response =>
            {
                if (response.body.length > 0)
                {
                    pipeline(
                        got.stream(googleFaviconApi + url),
                        fs.createWriteStream(iconfile)
                    );
                    console.log("Downloaded favicon for: " + url);
                    /*
                    pipeline(response.body, fs.createWriteStream(iconfile))
                        .then(() =>
                        {
                            console.log("Downloaded favicon for: " + url);
                        })
                        .catch(e => console.error(e)); */
                }
            })
            .catch(e => console.error(e));
    });

    return url;
}

/**
 * Get set of urls out of a text file
 */
function linkify(rawText, imgRootDir)
{
    var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return rawText.replace(urlRegex, function (url)
    {
        var a = downloadFavIcon(url, imgRootDir);
    });
}

/**
 * Travese a directory for text files and call linkify on them
 */
function getFavicon(dirs, imgRootDir)
{
    dir.promiseFiles(dirs)
        .then((files) =>
        {
            files.map(f =>
            {
                var r = {};
                readFile(f, 'utf8')
                    .then((file) => { linkify(file, imgRootDir); })
            })
        })
        .catch(e => console.error(e))
}

module.exports = { getFavicon };