export class HtmlRenderer {
  static render(template: string): void {
    const appDivEl = document.getElementById("app");

    if (appDivEl) {
      appDivEl.innerHTML = template;
    }
  }
}
