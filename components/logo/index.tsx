export function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 125 125">
        <rect width="100%" height="100%" fill="#b83633"/>
        <circle r="8" cy="62" cx="63.5" fill="#fff"/>
        <g transform="translate(12,20)" fill="none" fillRule="evenodd">
            <g stroke="#fff" strokeWidth="6">
                <path d="m 10 30 c 45 0 45 0 80 0 c 0 10 0 10 0 20 c -45 0 -45 0 -80 0 c 0 -10 0 -10 0 -20 z" fill="#fff">
                    <animate
                        attributeName="d"
                        begin="1000ms"
                        dur="1500ms"
                        repeatCount="1"
                        to="m 10 30 c 20 -10 60 -10 80 0 c 15 8 15 12 0 20 c -20 10 -60 10 -80 0 c -15 -8 -15 -12 0 -20 z"
                        fill="freeze"
                    />
                    <animate
                        attributeName="fill"
                        begin="1000ms"
                        dur="2000ms"
                        repeatCount="1"
                        to="transparent"
                        fill="freeze"
                    />
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        begin="1000ms"
                        dur="1500ms"
                        repeatCount="1"
                        from="0, 0"
                        to="0, 2"
                        fill="freeze"
                    />
                </path>
                <path d="m 10 30 c 45 0 45 0 80 0 c 0 10 0 10 0 20 c -45 0 -45 0 -80 0 c 0 -10 0 -10 0 -20 z" fill="#fff" transform="rotate(90,49,42)">
                    <animate
                        attributeName="d"
                        begin="1000ms"
                        dur="1500ms"
                        repeatCount="1"
                        to="m 10 30 c 20 -10 60 -10 80 0 c 15 8 15 12 0 20 c -20 10 -60 10 -80 0 c -15 -8 -15 -12 0 -20 z"
                        fill="freeze"
                    />
                    <animate
                        attributeName="fill"
                        begin="1000ms"
                        dur="2000ms"
                        repeatCount="1"
                        to="transparent"
                        fill="freeze"
                    />
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        begin="1000ms"
                        dur="1500ms"
                        repeatCount="1"
                        from="90,49,42"
                        to="60,49,42"
                        fill="freeze"
                    />

                </path>
                <path d="m 10 30 c 45 0 45 0 80 0 c 0 10 0 10 0 20 c -45 0 -45 0 -80 0 c 0 -10 0 -10 0 -20 z" fill="#fff" transform="rotate(90,49,42)">
                    <animate
                        attributeName="d"
                        begin="1000ms"
                        dur="1500ms"
                        repeatCount="1"
                        to="m 10 30 c 20 -10 60 -10 80 0 c 15 8 15 12 0 20 c -20 10 -60 10 -80 0 c -15 -8 -15 -12 0 -20 z"
                        fill="freeze"
                    />
                    <animate
                        attributeName="fill"
                        begin="1000ms"
                        dur="2000ms"
                        repeatCount="1"
                        to="transparent"
                        fill="freeze"
                    />
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        begin="1000ms"
                        dur="1500ms"
                        repeatCount="1"
                        from="90,49,42"
                        to="120,49,42"
                        fill="freeze"
                    />
                </path>
            </g>
        </g>
    </svg>
  );
}