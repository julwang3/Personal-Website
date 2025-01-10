import fs from 'fs';
import { Octokit } from '@octokit/core';

const { token, owner, repo, key } = JSON.parse(fs.readFileSync('../../config.json', 'utf8'));
const octokit = new Octokit({
    auth: token
})
const lockedFiles = JSON.parse(await getFileContent(key));

async function getFileContent(path) {
    try {
        // Get file content API call
        const response = await octokit.request(`GET /repos/{owner}/{repo}/contents/{path}`, {
            owner,
            repo,
            path,
            headers: {
                "X-GitHub-Api-Version": "2022-11-28"
            }
        });
        // Decode file content
        const content = Buffer.from(response.data.content, "base64").toString("utf-8");
        return content;
    } 
    catch (error) {
        console.error("[ERROR] Fetching file:", error.message);
        return "";
    }
}

export async function submitPassword(password) {
    // Get files
    const files = lockedFiles[password];
    // Return contents of all the files
    const contents = [];
    if (files !== undefined) {
        for (let i = 0; i < files.length; i++) {
            contents[i] = await getFileContent(files[i]);
        }
    }
    return contents;
}