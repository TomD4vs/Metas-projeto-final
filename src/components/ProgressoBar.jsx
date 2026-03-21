function ProgressoBar({ valor, cor }) {
    return (
        <div className="progresso-track">
            <div
                className="progresso-fill"
                style={{ width: `${valor}%`, backgroundColor: cor }}
            />
        </div>
    )
}

export default ProgressoBar