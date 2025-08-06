import { Title } from "@solidjs/meta";
import { Link } from "inertia-adapter-solid";

export default function Home() {
    return (
        <>
            <Title>Home</Title>
            <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
                <div class="fixed -z-10 inset-0 overflow-hidden opacity-20">
                    <div class="absolute top-20 -left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div class="absolute top-60 right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div class="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>

                <main class="max-w-7xl mx-auto px-6 py-24">
                    <section class="text-center mb-28">
                        <div class="inline-flex items-center mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                            <span class="text-indigo-600 font-medium">
                                Laravel
                            </span>
                            <span class="mx-2 text-gray-400">+</span>
                            <span class="text-blue-500 font-medium">
                                SolidJS
                            </span>
                        </div>

                        <h1 class="text-6xl font-bold mb-6 leading-tight">
                            Build{" "}
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                                Full-Stack
                            </span>{" "}
                            Apps
                        </h1>

                        <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                            The perfect fusion of Laravel's backend power with
                            SolidJS's reactive frontend
                        </p>

                        <div class="flex justify-center gap-4">
                            <Link
                                href="https://github.com/lmsn-id/LaravelSolidJS_Template.git"
                                class="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                            >
                                Get Started →
                            </Link>
                            <Link
                                href="https://github.com/lmsn-id/"
                                target="_blank"
                                class="px-8 py-3 bg-white/80 border border-gray-200 rounded-lg backdrop-blur-sm hover:bg-white transition-all"
                            >
                                GitHub
                            </Link>
                        </div>
                    </section>

                    <section class="grid md:grid-cols-3 gap-8 mb-28">
                        {[
                            {
                                icon: "🚀",
                                title: "Lightning Fast",
                                description:
                                    "SolidJS's fine-grained reactivity delivers near-native performance",
                            },
                            {
                                icon: "🧩",
                                title: "Seamless Integration",
                                description:
                                    "Inertia.js bridges Laravel and SolidJS with zero API headaches",
                            },
                            {
                                icon: "🔮",
                                title: "Future-Proof",
                                description:
                                    "TypeScript + Vite tooling for cutting-edge development",
                            },
                        ].map((feature) => (
                            <div class="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                                <div class="text-4xl mb-4">{feature.icon}</div>
                                <h3 class="text-xl font-semibold mb-3">
                                    {feature.title}
                                </h3>
                                <p class="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </section>

                    <section class="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                        <div class="px-6 py-4 bg-gray-800 flex gap-2">
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div class="p-6 font-mono text-gray-100">
                            <p class="text-blue-400">// Laravel Route</p>
                            <p>
                                Route::get{"("}'/', function() {"{"}
                            </p>
                            <p class="ml-4">return Inertia::render("Home");</p>
                            <p class="mb-4">{"})"};</p>

                            <p class="text-blue-400">// SolidJS Component</p>
                            <p>export default function Home(){"{"}</p>
                            <p class="ml-4">
                                return &lt;h1&gt;Hello World&lt;/h1&gt;;
                            </p>
                            <p>{"}"};</p>
                        </div>
                    </section>
                </main>

                <footer class="max-w-7xl mx-auto px-6 py-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Laravel SolidJS Stack</p>
                </footer>
            </div>
        </>
    );
}
