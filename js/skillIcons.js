const theme = localStorage.getItem("theme");

function getSkillIcons() {
    if (theme == "dark") {
        document.write(`
            <div>
                <h2>Skills</h2>
                    <a href="https://skillicons.dev">
                    <img src="https://skillicons.dev/icons?i=bash,cloudflare,docker,fastapi,fediverse,git,github,gitlab,linux,mastodon,md,nginx,postgres,py,raspberrypi,redis,sentry,vscode&theme=dark" alt="Skill Icons">
                </a>
            </div>
        `
        );
    } else {
        document.write(`
            <div>
                <h2>Skills</h2>
                    <a href="https://skillicons.dev">
                    <img src="https://skillicons.dev/icons?i=bash,cloudflare,docker,fastapi,fediverse,git,github,gitlab,linux,mastodon,md,nginx,postgres,py,raspberrypi,redis,sentry,vscode&theme=light" alt="Skill Icons">
                </a>
            </div>
        `
        );

    };
}