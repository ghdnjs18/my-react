import Button from './Button';

function Words({w, handleRemove}) {
    const wordStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const onRemove = (e) => {
        handleRemove(e)
    }
    return (
        <div style={wordStyle}>
            <h2>{w.word}</h2>
            <Button size='small' type='button' handleClick={(e) => onRemove(e)}>DELETE</Button>
            {/* <h2>{w.meaning}</h2> */}
        </div>
    )

}

export default Words;