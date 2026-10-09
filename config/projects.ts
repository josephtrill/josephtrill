// Project categories/tags for filtering
// Add or remove categories as needed
export const projectCategories: string[] = [
  "All",
  "Web App",
  "Desktop App",
  "Educational",
  "Web Template",
  "AI/ML/DL",
  "CLI Tool",
  "iOS App",
  "Android App",
  "Dev Tool",
];

// GitHub repositories to display as projects
// Format: "owner/repo"
export const githubRepos: string[] = [
  "josephtrill/Advanced-Tab-Manager",
  "josephtrill/linux-auto",
  "josephtrill/vox-md",
  "josephtrill/Vox-Hash",
  "josephtrill/Python-1000-Snippets",
  "josephtrill/Assembly-300-Snippets",
  "josephtrill/Bytey",
  "josephtrill/Chess-Master-Ultimate",
  "josephtrill/Chess-Ultimate",
  "josephtrill/Number-Systems-Converter",
  "josephtrill/Ultimate-Tic-Tac-Toe",
  "josephtrill/Shibaccus-Web",
  "josephtrill/Clarisse-Portfolio",
  "josephtrill/Zylthra",
  "josephtrill/KemonoDownloader",
  "josephtrill/Java-Quiz-App",
  "josephtrill/Image-Binder",
  "josephtrill/PyExe-Builder",
  "josephtrill/ZapisAxis",
  "josephtrill/VoxSpace",
  "josephtrill/llm-wikipedia",
  "josephtrill/josephtrill",
  "josephtrill/bldrx",
  "josephtrill/krnr",
  "josephtrill/Task-Tracker-Pro",
  "josephtrill/AutoTable",
  "josephtrill/CodeStash",
  "josephtrill/Web-Inventory",
  "josephtrill/Izel",
  "josephtrill/CycleOne",
  "josephtrill/Eventra",
];

// Custom overrides for specific repos (optional)
// Use this to provide custom demo URLs, images, categories, etc.
export const projectOverrides: Record<
  string,
  {
    demoUrl?: string;
    image?: string;
    category?: string;
    featured?: boolean;
    order?: number;
  }
> = {
  "josephtrill/Bytey": {
    demoUrl: "https://bytey.vercel.app/",
    image: "/project_images/Bytey.png",
    category: "Web App",
  },
  "josephtrill/Chess-Master-Ultimate": {
    demoUrl: "https://chess-master-ultimate.vercel.app/",
    image: "/project_images/Chess-Master-Ultimate.png",
    category: "Web App",
  },
  "josephtrill/Chess-Ultimate": {
    image: "/project_images/ChessUlt.png",
    category: "Desktop App",
  },
  "josephtrill/Shibaccus-Web": {
    demoUrl: "https://shibaccus.vercel.app/",
    image: "/project_images/Shibaccus-Web.png",
    category: "Web Template",
  },
  "josephtrill/Clarisse-Portfolio": {
    demoUrl: "https://clarisse-portfolio.vercel.app/",
    image: "/project_images/Clarisse-Portfolio.png",
    category: "Web Template",
  },
  "josephtrill/Zylthra": {
    demoUrl: "https://josephtrill.github.io/Zylthra/",
    image: "/project_images/zylthra.png",
    category: "Desktop App",
  },
  "josephtrill/KemonoDownloader": {
    demoUrl: "https://josephtrill.github.io/KemonoDownloader/",
    image: "/project_images/KemonoDownloader.png",
    category: "Desktop App",
  },
  "josephtrill/Advanced-Tab-Manager": {
    image: "/project_images/Advanced-Tab-Manager.png",
    category: "Desktop App",
  },
  "josephtrill/linux-auto": {
    image: "/project_images/linux-auto.png",
    category: "CLI Tool",
  },
  "josephtrill/vox-md": {
    image: "/project_images/vox-md.png",
    category: "CLI Tool",
  },
  "josephtrill/Vox-Hash": {
    image: "/project_images/vox-hash.png",
    category: "CLI Tool",
  },
  "josephtrill/Python-1000-Snippets": {
    image: "/project_images/python-1000-snippets.png",
    category: "Educational",
  },
  "josephtrill/Assembly-300-Snippets": {
    image: "/project_images/assembly-300-snippets.png",
    category: "Educational",
  },
  "josephtrill/Java-Quiz-App": {
    image: "/project_images/Java-Quiz-App.png",
    category: "Desktop App",
  },
  "josephtrill/Image-Binder": {
    image: "/project_images/ImageBinder.png",
    category: "Desktop App",
  },
  "josephtrill/PyExe-Builder": {
    image: "/project_images/PyExe.png",
    category: "Desktop App",
  },
  "josephtrill/Number-Systems-Converter": {
    image: "/project_images/NumSysCon.png",
    category: "Desktop App",
  },
  "josephtrill/Ultimate-Tic-Tac-Toe": {
    image: "/project_images/UltT3.png",
    category: "Desktop App",
  },
  "josephtrill/ZapisAxis": {
    image: "/project_images/ZapisAxis.png",
    category: "Desktop App",
  },
  "josephtrill/VoxSpace": {
    image: "/project_images/VoxSpace.png",
    category: "Web App",
  },
  "josephtrill/Web-Inventory": {
    image: "/project_images/Web-Inventory.png",
    category: "Web App",
    featured: true,
    order: 6,
  },
  "josephtrill/llm-wikipedia": {
    image: "/project_images/llm-wikipedia.png",
    category: "AI/ML/DL",
  },
  "josephtrill/josephtrill": {
    image: "/project_images/josephtrill.jpg",
    category: "Web App",
  },
  "josephtrill/bldrx": {
    image: "/project_images/bldrx.png",
    category: "CLI Tool",
    featured: true,
    order: 1,
  },
  "josephtrill/krnr": {
    image: "/project_images/krnr.png",
    category: "CLI Tool",
    featured: true,
    order: 2,
  },
  "josephtrill/Task-Tracker-Pro": {
    image: "/project_images/TaskTrackerPro.png",
    category: "Desktop App",
    featured: true,
    order: 3,
  },
  "josephtrill/AutoTable": {
    image: "/project_images/AutoTable.png",
    category: "Web App",
    featured: true,
    order: 4,
  },
  "josephtrill/CodeStash": {
    image: "/project_images/CodeStash.png",
    category: "Web App",
    featured: true,
    order: 5,
  },
  "josephtrill/Izel": {
    image: "/project_images/Izel.png",
    category: "Dev Tool",
    featured: true,
  },
  "josephtrill/CycleOne": {
    image: "/project_images/CycleOne.png",
    category: "iOS App",
    featured: true,
    order: 0,
  },
  "josephtrill/Eventra": {
    image: "/project_images/Eventra.png",
    category: "Web App",
    featured: true,
    order: -1,
  },
};

// Screenshot paths mapping (for repos with local screenshots)
export const screenshotPaths: Record<string, string[]> = {
  "josephtrill/Advanced-Tab-Manager": [
    "/project_screenshots/ATM/atm-1.png",
    "/project_screenshots/ATM/atm-2.png",
    "/project_screenshots/ATM/atm-3.png",
    "/project_screenshots/ATM/atm-4.png",
    "/project_screenshots/ATM/atm-5.png",
  ],
  "josephtrill/Zylthra": [
    "/project_screenshots/Zylthra/z_con.png",
    "/project_screenshots/Zylthra/z_gen.png",
  ],
  "josephtrill/KemonoDownloader": [
    "/project_screenshots/KemonoDownloader/kemono-1.png",
    "/project_screenshots/KemonoDownloader/kemono-2.png",
    "/project_screenshots/KemonoDownloader/kemono-3.png",
  ],
  "josephtrill/Bytey": [
    "/project_screenshots/Bytey/bytey_collect.png",
    "/project_screenshots/Bytey/bytey_game.png",
    "/project_screenshots/Bytey/bytey_items.png",
  ],
  "josephtrill/Chess-Master-Ultimate": [
    "/project_screenshots/ChessMU/cmu_game_b.png",
    "/project_screenshots/ChessMU/cmu_game_w.png",
    "/project_screenshots/ChessMU/cmu_home_b.png",
    "/project_screenshots/ChessMU/cmu_home_w.png",
  ],
  "josephtrill/Shibaccus-Web": [
    "/project_screenshots/Shibaccus/s_home_d.png",
    "/project_screenshots/Shibaccus/s_home_w.png",
    "/project_screenshots/Shibaccus/s_portfolio_d.png",
    "/project_screenshots/Shibaccus/s_portfolio_w.png",
    "/project_screenshots/Shibaccus/s_services_d.png",
    "/project_screenshots/Shibaccus/s_services_w.png",
  ],
  "josephtrill/Clarisse-Portfolio": [
    "/project_screenshots/Clarisse-Portfolio/S_Home_D.png",
    "/project_screenshots/Clarisse-Portfolio/S_Home_W.png",
    "/project_screenshots/Clarisse-Portfolio/S_Projects_D.png",
    "/project_screenshots/Clarisse-Portfolio/S_Projects_W.png",
    "/project_screenshots/Clarisse-Portfolio/S_Skills_D.png",
    "/project_screenshots/Clarisse-Portfolio/S_Skills_W.png",
  ],
  "josephtrill/Java-Quiz-App": [
    "/project_screenshots/JavaQA/JQA-1.png",
    "/project_screenshots/JavaQA/JQA-2.png",
    "/project_screenshots/JavaQA/JQA-3.png",
  ],
  "josephtrill/vox-md": [
    "/project_screenshots/VOXMD/VM-1.png",
    "/project_screenshots/VOXMD/VM-2.png",
    "/project_screenshots/VOXMD/VM-3.png",
  ],
  "josephtrill/Vox-Hash": [
    "/project_screenshots/VOXHASH/vh-1.png",
    "/project_screenshots/VOXHASH/vh-2.png",
    "/project_screenshots/VOXHASH/vh-3.png",
  ],
  "josephtrill/linux-auto": [
    "/project_screenshots/linux-auto/la-1.png",
    "/project_screenshots/linux-auto/la-2.png",
    "/project_screenshots/linux-auto/la-3.png",
    "/project_screenshots/linux-auto/la-4.png",
  ],
  "josephtrill/Python-1000-Snippets": [
    "/project_screenshots/P1000S/P1000S-1.png",
    "/project_screenshots/P1000S/P1000S-2.png",
    "/project_screenshots/P1000S/P1000S-3.png",
    "/project_screenshots/P1000S/P1000S-4.png",
    "/project_screenshots/P1000S/P1000S-5.png",
  ],
  "josephtrill/Assembly-300-Snippets": [
    "/project_screenshots/A300S/A300S-1.png",
    "/project_screenshots/A300S/A300S-2.png",
    "/project_screenshots/A300S/A300S-3.png",
    "/project_screenshots/A300S/A300S-4.png",
  ],
  "josephtrill/VoxSpace": ["/project_screenshots/VoxSpace/VoxSpace-1.png"],
  "josephtrill/AutoTable": [
    "/project_screenshots/AutoTable/at-1.png",
    "/project_screenshots/AutoTable/at-2.png",
    "/project_screenshots/AutoTable/at-3.png",
  ],
  "josephtrill/CodeStash": [
    "/project_screenshots/CodeStash/cs-1.png",
    "/project_screenshots/CodeStash/cs-2.png",
    "/project_screenshots/CodeStash/cs-3.png",
    "/project_screenshots/CodeStash/cs-4.png",
  ],
  "josephtrill/CycleOne": [
    "/project_screenshots/CycleOne/Calendar-dark.png",
    "/project_screenshots/CycleOne/Calendar-light.png",
    "/project_screenshots/CycleOne/Insights-dark.png",
    "/project_screenshots/CycleOne/Insights-light.png",
    "/project_screenshots/CycleOne/Logview-dark.png",
    "/project_screenshots/CycleOne/Logview-light.png",
    "/project_screenshots/CycleOne/Settings-dark.png",
    "/project_screenshots/CycleOne/Settings-light.png",
  ],
};
