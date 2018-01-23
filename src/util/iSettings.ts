interface iSettings{
    firstName ?: string;
    lastName  ?: string;
    email     ?: string;
    zip       ?: number;  // for Weather

    theme         ?: string;  // Dark, Light
    wallpaperTint ?: number;  // 0 to 1
}

export default iSettings;