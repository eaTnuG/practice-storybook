module.exports = {
  stories: ["../src/**/**/stories.(js|mdx)"],
  // 스토리북이 읽어들일 스토리 파일들의 이름 형식을 지정한다.
  addons: ["@storybook/preset-create-react-app", "@storybook/addon-knobs", "@storybook/addon-actions", "@storybook/addon-links", "@storybook/addon-docs"]
  // addon은 잠시후에 더 알아보자.
};
