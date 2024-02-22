//@ts-ignore
import React from "react";
import { createRoot } from "react-dom/client";
import {
    Appear,
    CodePane,
    Deck,
    DefaultTemplate,
    Heading,
    SlideLayout,
} from "spectacle";
import "./index.css";
import ReactDice from "react-dice-complete";
import materialOceanic from "react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic";

const theme = {
    colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-primary)",
        tertiary: "var(--color-secondary)",
    },
};

const Presentation = () => (
    <Deck theme={theme} template={() => <DefaultTemplate />}>
        <SlideLayout.Center>
            <Heading>For your safety</Heading>
            <Heading>🦺</Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <img
                loading="lazy"
                src="https://avatars.githubusercontent.com/u/44360092"
                alt="Evan Burrell"
                className="w-full"
            />
            <Heading>Evan Burrell</Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/5e38423084bb96caf84a40ce/5e68def37c7882fc13150c59_Group%20Logo%20-%20Black.png"
                alt="Street Group"
                className="w-full"
            />
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>He's back</Heading>
            <Heading>🥪 🎲</Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <img
                loading="lazy"
                alt="Ardia"
                src="https://cdn.vox-cdn.com/thumbor/MSbrCYbfIoo8YlGJEdo49iUcV0E=/0x0:3088x2316/1820x1213/filters:focal(972x973:1466x1467):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70995685/image_50382593.0.jpg"
                className="aspect-video"
            />
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Street Con Official Sandwich</Heading>
            <div className="flex h-2/3 justify-center">
                <img
                    loading="lazy"
                    alt="Shaggy"
                    className="h-[334px]"
                    src="https://media.giphy.com/media/1rOZNBi7qHDbLfpgDl/giphy.gif"
                />
            </div>
            <Heading>🥪</Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Roll for bread</Heading>
            <div className="grid grid-cols-2 gap-48 items-center justify-items-center">
                <div className="text-5xl space-y-8">
                    <div>1. Tiger Bread</div>
                    <div>2. Sourdough</div>
                    <div>3. Seeded Bread</div>
                    <div>4. Hoagie Roll</div>
                    <div>5. Bagel</div>
                    <div>6. Toastie</div>
                </div>
                <div>
                    <ReactDice
                        rollTime={2}
                        numDice={1}
                        rollDone={() => {}}
                        dotColor="#FFFBFA"
                        faceColor="#F6AE2D"
                        dieSize={250}
                    />
                </div>
            </div>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Roll for cheese</Heading>
            <div className="grid grid-cols-2 gap-48 items-center justify-items-center">
                <div>
                    <ReactDice
                        rollTime={2}
                        numDice={1}
                        rollDone={() => {}}
                        dotColor="#FFFBFA"
                        faceColor="#F6AE2D"
                        dieSize={250}
                    />
                </div>
                <div className="text-5xl space-y-8">
                    <div>1. No Cheese</div>
                    <div>2. Vegan Cheese</div>
                    <div>3. American Cheese</div>
                    <div>4. Cheddar Cheese</div>
                    <div>5. Provolone Cheese</div>
                    <div>6. Swiss Cheese</div>
                </div>
            </div>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Two Rolls For Roughage</Heading>
            <div className="grid grid-cols-2 gap-48 items-center justify-items-center">
                <div>
                    <ReactDice
                        rollTime={2}
                        numDice={2}
                        rollDone={() => {}}
                        dotColor="#FFFBFA"
                        faceColor="#F6AE2D"
                        dieSize={200}
                    />
                </div>
                <div className="text-5xl space-y-8">
                    <div>1. Lettuce</div>
                    <div>2. Tomato</div>
                    <div>3. Avocado</div>
                    <div>4. Cucumber</div>
                    <div>5. Pickled Onion</div>
                    <div>6. Sprouts</div>
                </div>
            </div>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Roll for main</Heading>
            <div className="grid grid-cols-2 gap-48 items-center justify-items-center">
                <div className="text-5xl space-y-8">
                    <div>1. Quorn</div>
                    <div>2. Turkey</div>
                    <div>3. Ham</div>
                    <div>4. Chicken</div>
                    <div>5. Tri-tip</div>
                    <div>6. Bacon</div>
                </div>
                <div>
                    <ReactDice
                        rollTime={2}
                        numDice={1}
                        rollDone={() => {}}
                        dotColor="#FFFBFA"
                        faceColor="#F6AE2D"
                        dieSize={250}
                    />
                </div>
            </div>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Roll for sauce</Heading>
            <div className="grid grid-cols-2 gap-48 items-center justify-items-center">
                <div className="text-5xl space-y-8">
                    <div>1. Ketchup</div>
                    <div>2. Mustard</div>
                    <div>3. Mayo</div>
                    <div>4. BBQ</div>
                    <div>5. Piccalilli</div>
                    <div>6. Branston Pickle</div>
                </div>
                <div>
                    <ReactDice
                        rollTime={2}
                        numDice={1}
                        rollDone={() => {}}
                        dotColor="#FFFBFA"
                        faceColor="#F6AE2D"
                        dieSize={250}
                    />
                </div>
            </div>
        </SlideLayout.Center>
        <SlideLayout.Section>What a sandwich. 🎉</SlideLayout.Section>
        <SlideLayout.Section>Enough about sandwiches.</SlideLayout.Section>
        <SlideLayout.Center>
            <Heading>Let's talk about safety</Heading>
            <Heading>👷‍♂️</Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Coffee Safety</Heading>
            <Heading>☕</Heading>
        </SlideLayout.Center>
        <SlideLayout.Section>Support your local roaster.</SlideLayout.Section>
        <SlideLayout.List
            title="Local Roasters"
            items={["Mancoco", "Ancoats Coffee", "Kickback Coffee"]}
        ></SlideLayout.List>
        <SlideLayout.Section>Enough about coffee.</SlideLayout.Section>
        <SlideLayout.Center>
            <Heading>Code Safety</Heading>
            <Heading>💻</Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>
                <i>Checks time.</i>
            </Heading>
            <iframe
                src="https://giphy.com/embed/1BhGf5CrA0B00SG79H"
                width="480"
                height="272"
                loading="lazy"
                allowFullScreen
            ></iframe>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>It's 2024.</Heading>
            <Appear>
                <Heading>Interfaces are not your friend.</Heading>
            </Appear>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>😱</Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>
                Union Types <i>are</i> your friend.
            </Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <CodePane language="php" theme={materialOceanic}>
                {`
class Address implements HasManualResolutions
{
    public function resolve()

    public function barcode()
}

class Person implements HasManualResolutions
{
    public function resolve()

    public function ignore()
}

class Property implements HasManualResolutions
{
    public function resolve()

    public function ignore()
}
`}
            </CodePane>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <CodePane language="php" theme={materialOceanic}>
                {`
class ManualResolutionsService {
    public function resolve(HasManualResolutions $hasManualResolutions)
    {
        // Which one?
    }
}
`}
            </CodePane>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <CodePane language="php" theme={materialOceanic}>
                {`
class ManualResolutionsService {
    public function resolve(Address|Person|Property $hasManualResolutions)
    {
        return match($hasManualResolutions::class) {
            Address::class => //,
            Person::class => //,
            Property::class => //,
            default => throw new \Exception('Class not found'),
        }
    }
}
`}
            </CodePane>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>
                Docblock are <i>sorta</i> your friend.
            </Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <CodePane language="php" theme={materialOceanic}>
                {`
/**
 * @var array $options
 */
public function __construct(private array $options = [])
`}
            </CodePane>
            <Appear>
                <Heading>I know you're an array...</Heading>
            </Appear>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <CodePane language="php" theme={materialOceanic}>
                {`
/**
 * @var string[] $options
 */
public function __construct(private array $options = [])
`}
            </CodePane>
            <Appear>
                <Heading>Better.</Heading>
            </Appear>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Default to open.</Heading>
            <Appear>
                <Heading>
                    <i>As a company</i>.
                </Heading>
            </Appear>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>
                Default to <s>open</s> closed.
            </Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Default to private.</Heading>
            <div className="flex items-center justify-center">
                <iframe
                    src="https://giphy.com/embed/MfTW6bkRhvFzbAZO1p"
                    width="480"
                    height="400"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </SlideLayout.Center>
        <SlideLayout.Section>
            2024 is the year of <em className="text-purple-800">readonly</em>.
        </SlideLayout.Section>
        <SlideLayout.Center>
            <CodePane language="php" theme={materialOceanic}>
                {`
readonly class WritingNotAllowed {

}
`}
            </CodePane>
            <Appear>
                <Heading>Stunning.</Heading>
            </Appear>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>
                Designers are <i>sorta</i> your friend.
            </Heading>
        </SlideLayout.Center>
        <SlideLayout.Section>😬</SlideLayout.Section>
        <SlideLayout.Section>Jokes.</SlideLayout.Section>
        <SlideLayout.Center>
            <Heading>Design Systems are your friend.</Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>More Tokens.</Heading>
            <Heading>More Problems.</Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>px-4?</Heading>
            <Appear>
                <Heading>px-6?</Heading>
            </Appear>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <CodePane language="js" theme={materialOceanic}>
                {`
spacing: {
    tiny: 'var(--spacing-tiny, 2px)',
    xxs: 'var(--spacing-xxs, 4px)',
    xs: 'var(--spacing-xs, 6px)',
    sm: 'var(--spacing-sm, 8px)',
    medium: 'var(--spacing-medium, 12px)',
    base: 'var(--spacing-base, 16px)',
    large: 'var(--spacing-large, 24px)',
    xl: 'var(--spacing-xl, 32px)',
    xxl: 'var(--spacing-xxl, 40px)',
    huge: 'var(--spacing-huge, 48px)'
}
`}
            </CodePane>
            <Appear>
                <Heading>Not one of these?</Heading>
            </Appear>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Have a chat.</Heading>
            <Heading>🗣️z</Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Typescript</Heading>
            <Heading>🚀</Heading>
            <div className="flex items-center justify-center">
                <i>Because I have to...</i>
            </div>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Bridge</Heading>
            <div className="text-2xl">
                Since adding Typescript and utilizing the data objects pattern
                in Bridge, the last agent facing 500 error was September 1st.
            </div>
            <Heading>🌉</Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Sentry</Heading>
            <img
                src="https://images.ctfassets.net/em6l9zw4tzag/1ooSqS6jFkCZvspS1oJYYP/bb79ec6a1249ac442561e48d168c74da/Screen_Shot_2021-03-29_at_9.38.22_PM.png"
                alt="Sentry"
                loading="lazy"
                className="h-[500px] object-cover"
            />
        </SlideLayout.Center>
        <SlideLayout.Center>
            <img
                src="https://preview.redd.it/fi6ry4acqbf21.jpg?width=1080&crop=smart&auto=webp&s=c15b9f7ca38d8849d1cd5ca22a46d33f911037af"
                alt="Airbnb"
                loading="lazy"
            />
        </SlideLayout.Center>
        <SlideLayout.List
            title="Strategy"
            items={["Educate", "New code in TypeScript", "Conversion"]}
        />
        <SlideLayout.Center>
            <Heading>Looking at you Street JS Models</Heading>
            <Heading>👀</Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Psychological Safety</Heading>
            <Heading>🧠</Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Chris Grice</Heading>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/d4CVQoVH7LQ?si=tdhsQEy-9tjCIqp6"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                loading="lazy"
            ></iframe>
        </SlideLayout.Center>
        <SlideLayout.Section>
            Giving and receiving feedback.
        </SlideLayout.Section>
        <SlideLayout.Section>
            <h1 className="text-6xl">Pull Request reviews aren't personal.</h1>
        </SlideLayout.Section>
        <SlideLayout.Section>
            <h1 className="text-6xl">Conversations belong on pull requests.</h1>
        </SlideLayout.Section>
        <SlideLayout.Section>Treat silence like a bug. 🐛</SlideLayout.Section>
        <SlideLayout.Center>
            <Heading>Organizational Safety</Heading>
            <Heading>🤝</Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Document your external code.</Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Document your internal code more.</Heading>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <iframe
                src="https://scribe.knuckles.wtf/"
                height={600}
                width={900}
                loading="lazy"
            ></iframe>
        </SlideLayout.Center>
        <SlideLayout.List
            title="Documentation"
            items={["Draw a picture", "Ask a teammate", "Share it"]}
        ></SlideLayout.List>
        <SlideLayout.Center>
            <Heading>Lift up.</Heading>
            <iframe
                src="https://giphy.com/embed/YqPs8HGLpULojam26i"
                width="480"
                height="480"
                allowFullScreen
                loading="lazy"
            ></iframe>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Share it.</Heading>
            <iframe
                src="https://giphy.com/embed/roErxyvG3x4H6mhGBl"
                width="480"
                height="270"
                loading="lazy"
                allowFullScreen
            ></iframe>
        </SlideLayout.Center>
        <SlideLayout.Center>
            <Heading>Own it.</Heading>
            <iframe
                src="https://giphy.com/embed/3dpEh6rUHmWHlwxeOb"
                width="480"
                height="379"
                loading="lazy"
                allowFullScreen
            ></iframe>
        </SlideLayout.Center>
    </Deck>
);

createRoot(document.getElementById("app")!).render(<Presentation />);
