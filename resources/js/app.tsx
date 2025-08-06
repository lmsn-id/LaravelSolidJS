import { createInertiaApp } from "inertia-adapter-solid";
import { render } from "solid-js/web";
import "../css/app.css";

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob("./Pages/**/*.tsx");
        const pageModule: any = await pages[`./Pages/${name}.tsx`]();

        const RootLayout = (await import("@/Layout/RootLayout")).default;

        const Page = pageModule.default;

        const wrappedPage = (props: any) => (
            <RootLayout>
                <Page {...props} />
            </RootLayout>
        );

        return wrappedPage;
    },

    setup({ el, App, props }) {
        render(() => <App {...props} />, el);
    },
});
