import { ProjectShowcase } from "@/components/ui/project-showcase";

function openInNewTab(link: string) {
  window.open(link, "_blank", "noopener,noreferrer");
}

function LTRVersion() {
  return (
    <div className="p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1536px" }}
      >
        <ProjectShowcase
          testimonials={[
            {
              name: "Blueberry Loom",
              quote:
                'A cryptographically reinforced form builder that utilizes ML-KEM-1024, as well as the "ChaCha20 + Serpent-256 CBC + HMAC-SHA3-512" authenticated encryption scheme to enable end-to-end encryption for enhanced data protection.',
              designation: "Next.js + Nuxt Project",
              src: "https://cdn.21st.dev/assets/mirror/cc/cc6f3dce9f25d6bbb126083f10f37c46f24948d92ac7b0491180922ee7a97e5d.webp",
              link: "https://blueberry-loom.netlify.app/",
            },
            {
              name: "Namer UI",
              quote:
                "A comprehensive collection of modern, attractive, and unique reusable TypeScript components crafted specifically for Next.js.",
              designation: "Next.js Project",
              src: "https://cdn.21st.dev/assets/mirror/b6/b69bed71424aaa4d418528bdb4de408f047a96b27649948db2c20c74490ccf93.webp",
              link: "https://namer-ui.netlify.app/",
            },
            {
              name: "Namer UI For Vue",
              quote:
                "A collection of customizable, reusable TypeScript, vanilla CSS components for Vue 3.",
              designation: "Vue Project",
              src: "https://cdn.21st.dev/assets/mirror/b4/b4b98301197bb835d51fdbfc01ce99c7654cfa3cb5a8847be794e6ad205508f2.webp",
              link: "https://namer-ui-for-vue.netlify.app/",
            },
            {
              name: "In-Browser-File-Encrypter",
              quote:
                "A browser-based tool that encrypts files locally without interacting with the server. It uses AES-256 for data encryption and HMAC-SHA512 for integrity verification.",
              designation: "Vanilla HTML/CSS/JS Project",
              src: "https://cdn.21st.dev/assets/mirror/12/121e1c1a51a69a0109c03aef1c00e4a6b54f970c616ddb9861c6eee9d78d20e2.webp",
              link: "https://codepen.io/Northstrix/full/xxvXvJL",
            },
            {
              name: "Plum Cave",
              quote:
                'A cloud backup solution that employs the "ChaCha20 + Serpent-256 CBC + HMAC-SHA3-512" authenticated encryption scheme for data encryption and ML-KEM-1024 for quantum-resistant key exchange.',
              designation: "Next.js Project",
              src: "https://cdn.21st.dev/assets/localized/26eea63930dbafbb0d90e92eeab98362cff80a3d02b6df8d4449e6a56d4f638a.webp",
              link: "https://plum-cave.netlify.app/",
            },
          ]}
          colors={{
            name: "var(--project-showcase-name-color)",
            position: "var(--project-showcase-position-color)",
            testimony: "var(--project-showcase-testimony-color)",
          }}
          fontSizes={{
            name: "var(--project-showcase-name-size)",
            position: "var(--project-showcase-position-size)",
            testimony: "var(--project-showcase-testimony-size)",
          }}
          spacing={{
            nameTop: "var(--project-showcase-name-top)",
            nameBottom: "var(--project-showcase-name-bottom)",
            positionTop: "var(--project-showcase-position-top)",
            positionBottom: "var(--project-showcase-position-bottom)",
            testimonyTop: "var(--project-showcase-testimony-top)",
            testimonyBottom: "var(--project-showcase-testimony-bottom)",
            lineHeight: "var(--project-showcase-line-height)",
          }}
          halomotButtonGradient="var(--project-showcase-button-gradient)"
          halomotButtonBackground="var(--project-showcase-button-background)"
          halomotButtonTextColor="var(--project-showcase-button-text-color)"
          halomotButtonOuterBorderRadius="var(--project-showcase-button-outer-radius)"
          halomotButtonInnerBorderRadius="var(--project-showcase-button-inner-radius)"
          halomotButtonHoverTextColor="var(--project-showcase-button-hover-text-color)"
          onItemClick={openInNewTab}
        />
      </div>
    </div>
  );
}

function RTLVersion() {
  return (
    <div className="p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1152px" }}
      >
        <ProjectShowcase
          testimonials={[
            {
              name: "בלוברי לום",
              quote:
                'בונה טפסים מחוזק קריפטוגרפית המשתמש ב-ML-KEM-1024 ובסכימת ההצפנה המאומתת "ChaCha20 + Serpent-256 CBC + HMAC-SHA3-512" כדי לאפשר הצפנה מקצה לקצה להגנה משופרת על נתונים.',
              designation: "פרויקט Next.js ו-Nuxt",
              src: "https://cdn.21st.dev/assets/mirror/cc/cc6f3dce9f25d6bbb126083f10f37c46f24948d92ac7b0491180922ee7a97e5d.webp",
              link: "https://blueberry-loom.netlify.app/",
            },
            {
              name: "נמר UI",
              quote:
                "אוסף מקיף של רכיבי TypeScript מודרניים, אטרקטיביים וייחודיים לשימוש חוזר המיועדים במיוחד ל-Next.js.",
              designation: "פרויקט Next.js",
              src: "https://cdn.21st.dev/assets/mirror/b6/b69bed71424aaa4d418528bdb4de408f047a96b27649948db2c20c74490ccf93.webp",
              link: "https://namer-ui.netlify.app/",
            },
            {
              name: "נמר UI ל-Vue",
              quote:
                "אוסף של רכיבי TypeScript ו-CSS ונילה, הניתנים להתאמה אישית ולשימוש חוזר עבור Vue 3.",
              designation: "פרויקט Vue",
              src: "https://cdn.21st.dev/assets/mirror/b4/b4b98301197bb835d51fdbfc01ce99c7654cfa3cb5a8847be794e6ad205508f2.webp",
              link: "https://namer-ui-for-vue.netlify.app/",
            },
            {
              name: "מצפין קבצים בדפדפן",
              quote:
                "כלי מבוסס דפדפן המבצע הצפנת קבצים מקומית ללא אינטראקציה עם השרת. משתמש ב-AES-256 להצפנת נתונים וב-HMAC-SHA512 לאימות שלמות.",
              designation: "פרויקט HTML/CSS/JS וונילה",
              src: "https://cdn.21st.dev/assets/mirror/12/121e1c1a51a69a0109c03aef1c00e4a6b54f970c616ddb9861c6eee9d78d20e2.webp",
              link: "https://codepen.io/Northstrix/full/xxvXvJL",
            },
            {
              name: "פלאם קייב",
              quote:
                'פתרון גיבוי בענן המשתמש בסכימת הצפנה מאומתת "HMAC-SHA3-512 + CBC Serpent-256 + ChaCha20" להצפנת נתונים ו-ML-KEM-1024 לחילופי מפתחות עמידים לקוונטים.',
              designation: "פרויקט Next.js",
              src: "https://cdn.21st.dev/assets/localized/271f40f020e805a28b9ca6465cb3228c23c48c8b8c5aefebd3e50d0ebbb154b9.webp",
              link: "https://plum-cave.netlify.app/",
            },
          ]}
          colors={{
            name: "var(--project-showcase-name-color)",
            position: "var(--project-showcase-position-color)",
            testimony: "var(--project-showcase-testimony-color)",
          }}
          fontSizes={{
            name: "var(--project-showcase-name-size)",
            position: "var(--project-showcase-position-size)",
            testimony: "var(--project-showcase-testimony-size)",
          }}
          spacing={{
            nameTop: "var(--project-showcase-name-top)",
            nameBottom: "var(--project-showcase-name-bottom)",
            positionTop: "var(--project-showcase-position-top)",
            positionBottom: "var(--project-showcase-position-bottom)",
            testimonyTop: "var(--project-showcase-testimony-top)",
            testimonyBottom: "var(--project-showcase-testimony-bottom)",
            lineHeight: "var(--project-showcase-line-height)",
          }}
          isRTL={true}
          buttonInscriptions={{
            previousButton: "הקודם",
            nextButton: "הבא",
            openWebAppButton: "פתח אפליקציה",
          }}
          halomotButtonGradient="var(--project-showcase-button-gradient)"
          halomotButtonBackground="var(--project-showcase-button-background)"
          halomotButtonTextColor="var(--project-showcase-button-text-color)"
          halomotButtonOuterBorderRadius="var(--project-showcase-button-outer-radius)"
          halomotButtonInnerBorderRadius="var(--project-showcase-button-inner-radius)"
          halomotButtonHoverTextColor="var(--project-showcase-button-hover-text-color)"
          onItemClick={openInNewTab}
        />
      </div>
    </div>
  );
}

export { LTRVersion, RTLVersion };

export default LTRVersion;
