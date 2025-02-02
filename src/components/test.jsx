function handleClick(e) {
    console.log("Mai bahar hu");
}

export default function CreateButton({ name }) {

    return (
        <>
            <button onClick={handleClick} style={{ backgroundColor: "aliceblue" }}>Click Me {name}</button>
        </>
    )
}

export function SideBar() {
    return (
        <>
            <div>
                <ol>
                    <li>Cabbage</li>
                    <li>Gobi</li>
                    <li>Bhindi</li>
                </ol>
            </div>
        </>
    )
}