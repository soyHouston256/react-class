import { useToggle } from "../hooks/use-toggle";

export function Toggle() {
  const [isEnabled, toggle] = useToggle();
    return (
        <section>
            <h2>Toggle</h2>
            <article>
                <label htmlFor="toggle">Click to enable/disable:
                    <input
                        type="checkbox"
                        id="toggle"
                        checked={isEnabled}
                        onChange={() => toggle()}
                    />
                </label>
            </article>
        </section>
    );
}