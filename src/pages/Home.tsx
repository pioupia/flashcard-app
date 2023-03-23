import React from "react";
import ExternalLink from "../Components/ExternalLink";

function Home() {
    return (
        <>
            <h1>FlashCard App</h1>
            <p>
                Is an <ExternalLink href={"https://github.com/pioupia/flashcard-app"}>open-source application</ExternalLink> to create and train on your own
                flashcards.
            </p>
            <p>
                Original idea from <ExternalLink href={"https://github.com/kerimedeiros/"}>@kerimedeiros</ExternalLink> (<ExternalLink
                href={"https://github.com/kerimedeiros/flashcard-app"}>flashcard-app</ExternalLink>).
            </p>
            <br />

            <h3>Data usage and storage</h3>
            <p>In order for the application to function properly, it needs to retrieve data. In this paragraph, we will
                see what data is collected, where it is stored, and why.</p>
            <br />
            <h4>Which data are collected?</h4>
            <ul>
                <li>The name of the groups of cards</li>
                <li>Each card and its contents</li>
                <li>Every statistic on a card :</li>
                <ul>
                    <li>Number of correct answers</li>
                    <li>Number of wrong answers</li>
                    <li>Date of last revision</li>
                    <li>Date of the next appearance</li>
                    <li>The current number of steps on the card</li>
                </ul>
            </ul>

            <h4>Where is this data stored?</h4>
            <p>All this data will be stored in the <ExternalLink href={"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}>localStorage</ExternalLink> of your browser.</p>
            <p><ins>No data</ins> will be sent to a remote server.</p>
            <p>In order to be able to restore your data in case of loss, we let you export them in a compressed <span className={"inline-code"}>.fc</span> format specially created for this application.</p>

            <h4>Why these data are stored?</h4>
            <p>If this data is not stored, you will lose all your work every time you leave the website. Therefore, we have to store it.</p>
            <p>When you use this website, you agree that the data specified above will be saved in your browser.</p>
        </>
    )
}

export default Home;