  const generateBtn = document.getElementById("generate-btn");
  const outputContainer = document.getElementById("output-container");
  const outputText = document.getElementById("output-text");
  const copyBtn = document.getElementById("copy-btn");

  generateBtn.addEventListener("click", () => {
    const websiteUrlInput = document.getElementById("website-url");
    const websiteUrl = websiteUrlInput.value.replace(/\/$/, "");

    if (!websiteUrl.startsWith("https")) {
      alert("Error: Please enter a valid website link starting with 'https'");
      return;
    }

    const platform = document.getElementById("platform-select").value;

    // Generate the robots.txt content based on the selected platform
    let robotsTxtContent = "";
  if (platform === "blogger") {
    robotsTxtContent = `User-agent: *
  Disallow: /search
  Disallow: /category/
  Disallow: /tag/
  Allow: /
  Sitemap: ${websiteUrl.replace(/\/$/, "")}/sitemap.xml
  Sitemap: ${websiteUrl.replace(/\/$/, "")}/sitemap-pages.xml`;
  } else if (platform === "wordpress") {
    robotsTxtContent = `User-agent: *
  Disallow: /wp-admin/
  Disallow: /wp-includes/
  Sitemap: ${websiteUrl.replace(/\/$/, "")}/sitemap.xml`;
  }

    // Display the robots.txt content and copy button
    outputText.innerText = robotsTxtContent;
    outputContainer.style.display = "block";
    copyBtn.style.display = "block";

    // Add typing effect to the output text
    const textLength = robotsTxtContent.length;
    let i = 0;
    const typeEffectInterval = setInterval(() => {
      outputText.innerText = robotsTxtContent.slice(0, i);
      i++;
      if (i > textLength) {
        clearInterval(typeEffectInterval);
      }
    }, 50);
  });

  copyBtn.addEventListener("click", () => {
    const copyText = document.createElement("textarea");
    copyText.value = outputText.innerText;
    document.body.appendChild(copyText);
    copyText.select();
    document.execCommand("copy");
    document.body.removeChild(copyText);
    alert("Copied to clipboard!");
  });
