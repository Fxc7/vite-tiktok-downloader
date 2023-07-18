import '../css/style.css';
import { checkUrl, downloadContent, resultContent, embedContent } from '../../lib/main.js';

document.querySelector('#app').innerHTML = `
    <div class="card">
      <img class="logo" src="/images/logo.svg" alt="">
      <h1>Tiktok Downloader</h1>
      <br />
      <input type="url" class="input-url" placeholder="Insert a link to download">
      <button class="submit-url"><i class="hidden fa fa-spinner fa-spin"></i> Submit</button>
    </div>
    <div id="container" class="result-content">
    </div>
    <div class="embed"></div>
    <p class="read-the-docs">
      &copy; 2023 Farhannnn, Inc.
    </p>
`;

document.querySelector('.submit-url').addEventListener('click', async function (event) {
    document.querySelector('i').classList.remove('hidden');
    event.preventDefault();
    const url = document.querySelector('.input-url').value;
    if (checkUrl(url)) {
        const result = await downloadContent(url);
        if (!result) {
            Swal.fire('Error', 'error get data!', 'error');
            document.querySelector('i').classList.add('hidden');
            return false;
        }
        Swal.fire('Success', 'Download Success!', 'success');
        document.querySelector('i').classList.add('hidden');
        document.getElementById('container').style.display = 'block';
        document.querySelector('#container').innerHTML = resultContent(result.thumbnail || '/images/logo.svg', result.description, result.video_watermark, result.video_nowatermark, result.music_url);
        document.querySelector('.embed').innerHTML = embedContent({ username: result.author.unique_id, title: result.description, videoID: result.id });
        return true;
    } else {
        Swal.fire('Warning', 'Invalid tiktok url!', 'info');
        document.querySelector('i').classList.add('hidden');
        return false;
    }
});

document.querySelector('.input-url').addEventListener('keyup', async (event) => {
    if (event.keyCode === 13) {
        document.querySelector('i').classList.remove('hidden');
        event.preventDefault();
        const url = event.target.value;
        if (checkUrl(url)) {
            const result = await downloadContent(url);
            if (!result) {
                Swal.fire('Error', 'error get data!', 'error');
                document.querySelector('i').classList.add('hidden');
                return false;
            }
            Swal.fire('Success', 'Download Success!', 'success');
            document.querySelector('i').classList.add('hidden');
            document.getElementById('container').style.display = 'block';
            document.querySelector('#container').innerHTML = resultContent(result.thumbnail || '/images/logo.svg', result.description, result.video_watermark, result.video_nowatermark, result.music_url);
            document.querySelector('.embed').innerHTML = embedContent({ username: result.author.unique_id, title: result.description, videoID: result.id });
            return true;
        } else {
            Swal.fire('Warning', 'Invalid tiktok url!', 'info');
            document.querySelector('i').classList.add('hidden');
            return false;
        }
    }
});