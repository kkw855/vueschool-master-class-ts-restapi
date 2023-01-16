import type { App } from "vue";
import _ from "lodash";

export default {
  install(app: App) {
    const componentFiles = import.meta.glob("@/components/App*.vue", {
      eager: true,
    });

    Object.entries(componentFiles).forEach(([path, m]) => {
      const componentName = _.upperFirst(
        _.camelCase(
          path
            .split("/")
            .pop()
            .replace(/\.\w+$/, "")
        )
      );

      app.component(componentName, m.default);
    });
  },
};
