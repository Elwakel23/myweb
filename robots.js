  		 const generateBtn = document.getElementById("generate-btn");
    const outputContainer = document.getElementById("output-container");
    const outputText = document.getElementById("output-text");
    const copyBtn = document.getElementById("copy-btn");

    generateBtn.addEventListener("click", () => {
      const websiteUrl = document.getElementById("website-url").value;
      const platform = document.getElementById("platform-select").value;

      // Generate the robots.txt content based on the selected platform
      let robotsTxtContent = "";
      if (platform === "blogger") {
        robotsTxtContent = `User-agent: Mediapartners-Google
  Disallow:

  User-agent: *
  Disallow: /search

  Allow: /
  Sitemap: ${websiteUrl}sitemap.xml`;
      } else if (platform === "wordpress") {
        robotsTxtContent = `User-agent: *
  Disallow: /wp-admin/
  Disallow: /wp-includes/
  Sitemap: ${websiteUrl}sitemap.xml`;
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
