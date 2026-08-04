import { services } from "../services/serviceInstances";
import type { Post } from "../types/post";
import { HtmlRenderer } from "../utils/htmlRenderer";

function singlePostTemplate(post: Post) {
  return `
    <li class="card">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    </li>`;
}

export async function postsTemplate() {
  const res = await services.postsService.getAll();

  const template = `
    <section class="list-page">
      <h1>Posts</h1>
      <ul class="card-grid">
          ${res.map((post) => singlePostTemplate(post)).join("")}
      </ul>
    </section>`;

  HtmlRenderer.render(template);
}
