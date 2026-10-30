/** Blocking theme boot — keep in sync with ThemeToggle storage key `theme`. */
export const THEME_BOOT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');else if(t==='light')document.documentElement.classList.remove('dark');}catch(e){}})();`;
