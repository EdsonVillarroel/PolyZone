import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Personaliza los fondos disponibles
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#000000" },
        { name: "custom", value: "#f4f4f4" },
      ],
    },
    // Agrega decoradores globales si necesitas envolturas alrededor de las historias
    layout: "centered", // Centra los componentes por defecto
  },
};

export default preview;
