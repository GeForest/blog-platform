import React from "react";

import Header from "../components/header/Header";
import Content from "../components/content/Content";
import AuthModal from "../components/modals/auth/AuthModal";
import PostModal from "../components/modals/post/PostModal";
import AlertMessage from "../components/alert/AlertMessage";
import BottomBar from "../components/bottom-bar/BottomBar";

export function MainPage() {
    return(
        <main>
            <header>
                <Header />
            </header>
            <section className="content">
                <Content />
            </section>
            <BottomBar />
            <AuthModal />
            <PostModal />
            <AlertMessage />
        </main>
    )
}