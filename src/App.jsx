import {Suspense, lazy, createSignal, createEffect, Show, onMount} from "solid-js";
import { Route, Router, useLocation } from "@solidjs/router";

import Footer from "./layout/Footer.jsx";
import Navigation from "./layout/Navigation.jsx";
import ScrollAnimation from "./components/animation/ScrollAnimation.jsx";
import Loader from "./components/external/Loader.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Privacy = lazy(() => import("./pages/Privacy.jsx"));
const Terms = lazy(() => import("./pages/Terms.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));

const AppContent = (props) => {
    const [hasLoaded, setHasLoaded] = createSignal(false);
    const [showLoader, setShowLoader] = createSignal(true);
    const location = useLocation();
    let loadingTimeout;

    onMount(() => {
        loadingTimeout = setTimeout(() => {
            setShowLoader(false);
            setHasLoaded(true);
        }, 4000);

        return () => {
            if (loadingTimeout) clearTimeout(loadingTimeout);
        };
    });
    return (
        <>
            <Show when={showLoader()}>
                <Loader />
            </Show>
            <div style={{
                opacity: showLoader() ? 0 : 1,
                transition: 'opacity 500ms ease-in-out',
                minHeight: '100vh'
            }}>
                <Navigation />
                {props.children}
                <ScrollAnimation />
                <Footer />
            </div>
        </>
    );
};

export default function App() {
    return (
        <Router root={AppContent}>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </Router>
    );
}