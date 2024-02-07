import { RefObject, useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../hooks/use-on-click-outside";

export function ClickOutSide() {
    const [isOpen, setState] = useState(false);
    const ref = useRef<HTMLUListElement>(null);
    useOnClickOutside(ref, () => setState(false));
    useAddMenuOpenClass(ref);
    return (
        <section>
      <h2>Click Outside</h2>
      <article>
        <button onClick={() => setState(true)}>Open</button>

        <ul ref={ref} style={{ display: isOpen ? "block" : "none" }}>
          <li>Lima</li>
          <li>Arequipa</li>
          <li>Huanuco</li>
          <li>Puno</li>
          <li>Juni</li>
          <li>Huancayo</li>
        </ul>
      </article>
    </section>
    )
    function useAddMenuOpenClass(ref: RefObject<HTMLElement>) {
        useEffect(()=>{
            ref.current?.classList.add('menu-open')
        }, [ref])
    }
}