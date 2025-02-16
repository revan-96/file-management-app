export const colors = {
    white: '#FFFFFF',
    black: '#000000',
    darkgrey: '#DDDDDD',
    medgrey: '#CCCCCC',
    grey: '#A9B5DF',
    lightgrey: '#F3F5FA',
    indigo: '#2D336B',
    lightblue: '#E2ECF8',
    red: '#F66264',
    green: '#28F215',
    yellow: '#FFD95F'
};

export function hexToHexWithAlpha(hex: string, alphaPercentage: number) {
    if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) {
      throw new Error('Invalid hex color format');
    }
  
    const alphaHex = Math.round((alphaPercentage / 100) * 255).toString(16).padStart(2, '0');
  
    return `${hex}${alphaHex}`;
}
  