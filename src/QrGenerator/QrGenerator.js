import React from "react";
import "./QrGenerator.css";
import qrcode from "qrcode-generator";

const QrGenerator = () => {
    console.log("Ejecutado render QrGenerator");

    // Estados
    const [url, setUrl] = React.useState("");
    const [border, setBorder] = React.useState(false);

    // Efectos
    React.useEffect(() => {
        const qr = qrcode(4, 'L');
        qr.addData(url);
        qr.make();
        qrReference.current.innerHTML = qr.createImgTag();
    }, [url]);

    // Referencias
    // const inputReference = React.useRef();
    const qrReference = React.useRef();

    return (
        <div className="qr-generator">

            <label htmlFor="url">Introduce una URL:</label>

            {/* Ejemplo de input recuperado por useRef */}
            {/* <input ref={inputReference} placeholder="https://google.es" name="url" id="url" type="text"/> */}

            {/* Ejemplo de input recuperado por onChange */}
            <input onChange={(event) => setUrl(event.target.value)} placeholder="https://google.es" name="url" id="url" type="text" />

            <div ref={qrReference} className={ `qr-generator__image ${ border ? 'qr-generator__image--border' : '' }` }></div>

            <button onClick={() => setBorder(!border)}>Añadir / Quitar borde</button>

            <div className="qr-generator__url">{url}</div>
        </div>
    );
}

export default QrGenerator;