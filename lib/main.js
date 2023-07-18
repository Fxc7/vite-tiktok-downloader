import axios from 'axios';

const apikey = 'kntl';

export function checkUrl(url) {
  const regex = /https?:\/\/.+?tiktok\.com\/(@.+|.+)/i;
  return regex.test(url);
}

export async function downloadContent(url) {
  try {
    const response = await axios.get(`https://api-fxc7.cloud.okteto.net/api/download/tiktok?url=${url}&apikey=${apikey}`);
    const result = response.data;
    if (result.status) {
      return result.result;
    }
    return result;
  } catch (error) {
    console.error(error);
    return { status: false, message: error?.message };
  }
}

export const resultContent = (image, title, watermark, nowatermark, audio) => `
  <img class="image-result" src="${image}" caption="">
  <p class="result-title">${title}</p>
  <button class="result-nowatermark"><a class="no-watermak" href="${nowatermark}"><i class="fa-solid fa-video"></i> Video no watermark</a></button>
  <button class="result-watermark"><a class="watermak" href="${watermark}"><i class="fa-sharp fa-solid fa-video"></i> Video watermark</a></button>
  <button class="result-audio"><a class="audio" href="${audio}"><i class="fa-solid fa-music"></i> Audio</a></button>
`;

export function embedContent(content) {
  const username = `@${content.username}`;
  const title = content.title.split('#')[0].trim();
  const videoID = content.videoID;
  return `
    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/${username}/video/${videoID}" data-video-id="${videoID}" style="max-width: 305px;min-width: 225px;">
      <section>
        <a target="_blank" title="${username}" href="https://www.tiktok.com/${username}?refer=embed">${username}</a> ${title.replaceAll('"', '')}
      </section>
    </blockquote>
  `;
}