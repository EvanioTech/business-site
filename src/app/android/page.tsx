import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Android App — Business Site",
    description:
        "Download our Android app to manage your account, get updates and stay connected on the go.",
};

export default function AndroidPage (){
    return (
        <main style={{ padding: 24, fontFamily: "Inter, system-ui, sans-serif" }}>
            <section
                style={{
                    maxWidth: 900,
                    margin: "0 auto",
                    display: "flex",
                    gap: 24,
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                <div style={{ flex: "1 1 320px" }}>
                    <h1 style={{ margin: "0 0 12px", fontSize: 32 }}>
                        Get our Android app
                    </h1>
                    <p style={{ margin: "0 0 20px", color: "#444", lineHeight: 1.5 }}>
                        Manage your account, receive notifications and access exclusive
                        features directly from your phone. Fast, secure and optimized for
                        Android.
                    </p>

                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.example.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-block",
                                padding: "10px 16px",
                                background: "#0f9d58",
                                color: "white",
                                borderRadius: 8,
                                textDecoration: "none",
                                fontWeight: 600,
                            }}
                        >
                            View on Google Play
                        </Link>

                        <Link
                            href="/download/app.apk"
                            style={{
                                display: "inline-block",
                                padding: "10px 16px",
                                background: "#eceff1",
                                color: "#111",
                                borderRadius: 8,
                                textDecoration: "none",
                                fontWeight: 600,
                            }}
                        >
                            Download APK
                        </Link>
                    </div>

                    <ul style={{ marginTop: 20, paddingLeft: 20, color: "#444" }}>
                        <li>Supports Android 8.0 (Oreo) and above</li>
                        <li>Offline-first, syncs when online</li>
                        <li>Secure authentication and data encryption</li>
                    </ul>
                </div>

                <div
                    style={{
                        flex: "0 0 260px",
                        width: 260,
                        height: 520,
                        borderRadius: 12,
                        background: "#f6f8fa",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 6px 18px rgba(10,10,10,0.06)",
                        overflow: "hidden",
                    }}
                    aria-hidden
                >
                    {/* Replace src with a real screenshot image in /public when available */}
                    <Image
                        src="/android-screenshot.png"
                        alt="App screenshot"
                        width={260}
                        height={520}
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
            </section>

            <section
                style={{
                    maxWidth: 900,
                    margin: "40px auto 0",
                    padding: "24px",
                    background: "#fff",
                    borderRadius: 10,
                    boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
                }}
            >
                <h2 style={{ marginTop: 0 }}>Why use the app?</h2>
                <p style={{ color: "#444" }}>
                    The app provides a more streamlined experience than the mobile web,
                    with push notifications, faster performance and offline access to key
                    features.
                </p>

                <h3 style={{ marginBottom: 8 }}>Help & support</h3>
                <p style={{ marginTop: 0, color: "#444" }}>
                    If you need help installing the APK or have any issues with the app,
                    contact support at{" "}
                    <a href="mailto:support@example.com">support@example.com</a>.
                </p>
            </section>
        </main>
    );
}