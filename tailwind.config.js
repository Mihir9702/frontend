module.exports = {
  content: ["src/pages/**/*.tsx", "src/components/**/*.tsx"],
  theme: {
    extend: {
      fontSize: {
        xs: ["10px", "12px"],
        sm: ["12px", "16px"],
        md: ["14px", "20px"],
        lg: ["16px", "24px"],
        xl: ["18px", "28px"],
        "2xl": ["20px", "32px"],
        "3xl": ["24px", "36px"],
        "4xl": ["30px", "42px"],
        "5xl": ["36px", "48px"],
        "6xl": ["48px", "56px"],
        "7xl": ["64px", "72px"],
        "8xl": ["72px", "80px"],
        "9xl": ["96px", "104px"],
      },
      fontFamily: {
        gg: ["gg sans Normal", "Noto Sans", "Helvetica Neue", "Helvetica"],
        sans: [
          "gg sans Normal",
          "Noto Sans",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        text: "#b2becd",
        dark: "#12191a",
        background: "#313338",
        highlight: "#404249",
        darkish: "#1e1f22",
        mid: "#2b2d31",
        lightdark: "#1f1f1f",
        dash: "#3e4147",
        lightblue: "#5864f2",
        darkblue: "#4751c4",
        online: "#22a559",
        offline: "#5a5c64",
        idle: "#f7b924",
        dnd: "#f04747",
      },
    },
  },
};
