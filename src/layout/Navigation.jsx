import { A } from "@solidjs/router";
import { createSignal, Show } from "solid-js";
import { Motion } from "solid-motionone";

import Text from "../components/reusable/Text.jsx";
import Section from "../components/reusable/Section.jsx";
import ThemeSwitch from "../components/external/ThemeSwitch.jsx";


export default function Navigation() {
    const [menuOpen, setMenuOpen] = createSignal(false);
    return (
    <Section className="h-8vh py-0 flex justify-between items-center">
        <Motion.div
          className="m-1 px-2 py-1 flex flex-row gap-2"
          initial={{ scaleY: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
        >
          <A href="/">
              <Text animate={true} className="font-bold opacity-50">
                Study Companion
              </Text>
          </A>
        </Motion.div>

        <Motion.div
            onClick={() => setMenuOpen(!menuOpen())}
            class="cursor-pointer px-2 py-2"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 0.85, scaleX: 1 }}
            transition={{ duration: 0.8 }}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d={menuOpen() ? "M6 6 L18 18" : "M3 6 L21 6"}/>
                <path d="M3 12 L21 12" style={{ opacity: menuOpen() ? 0 : 1 }}/>
                <path d={menuOpen() ? "M6 18 L18 6" : "M3 18 L21 18"}/>
            </svg>
            </Motion.div>

        <Show when={menuOpen()}>
            <MobileMenu onClose={() => setMenuOpen(false)}/>
        </Show>

    </Section>


    );
}

const MobileMenu = ({ onClose }) => {
    return (
        <>
            <Motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55 }}
                class="fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-xl z-50"
            >
                <div class="p-4">
                    <div class="flex justify-between items-center mb-8">
                        <Text animate={false} responsive="fluid" size="base" class="text-white">
                            Study Companion
                        </Text>
                        <button
                            onClick={onClose}
                            class="text-white hover:text-gray-300"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2">
                                <path d="M6 6 L18 18"/>
                                <path d="M6 18 L18 6"/>
                            </svg>
                        </button>
                    </div>
                    <nav className="space-y-4">
                        <A
                            href="/"
                            class="block text-white hover:text-gray-300 py-2"
                            onClick={onClose}
                        >
                            Home
                        </A>
                        <A
                            href="/about"
                            class="block text-white hover:text-gray-300 py-2"
                            onClick={onClose}
                        >
                            About
                        </A>
                        <A
                            href="/contact"
                            class="block text-white hover:text-gray-300 py-2"
                            onClick={onClose}
                        >
                            Contact
                        </A>
                        <A
                            href="/privacy"
                            class="block text-white hover:text-gray-300 py-2"
                            onClick={onClose}
                        >
                            Privacy
                        </A>
                        <A
                            href="/terms"
                            class="block text-white hover:text-gray-300 py-2"
                            onClick={onClose}
                        >
                            Terms
                        </A>
                    </nav>
                </div>
            </Motion.div>
            <div
                class="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={onClose}
            />
        </>
    );
}