import { services } from "../services/serviceInstances";
import { HtmlRenderer } from "../utils/htmlRenderer";

async function createPost(e: Event) {
  e.preventDefault();

  const formData = new FormData(e.target as HTMLFormElement);

  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  const result = await services.postsService.create({
    userId: 1,
    title,
    body,
  });

  console.log(result);
}

export function createPostTemplate() {
  const template = `
    <section class="list-page">
      <h1>Create Post</h1>
      <form id="create-post-form" class="form-card">
          <div class="form-field">
              <label for="title">Title</label>
              <input type="text" name="title" id="title">
          </div>
          <div class="form-field">
              <label for="body">Body</label>
              <input type="text" name="body" id="body">
          </div>
          <button type="submit" class="btn-primary">Create Post</button>
      </form>
    </section>`;

  HtmlRenderer.render(template);

  const formEl = document.getElementById("create-post-form");
  formEl?.addEventListener("submit", createPost);
}
