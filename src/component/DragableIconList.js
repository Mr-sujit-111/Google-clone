import React, { useEffect, useRef } from 'react'
import SortableList from 'react-sortable-list'

function DragableIconList() {
    let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White'];
    const dragableList = useRef(null);
    // dragableList.current.style.color = "red";
    useEffect(() => {
        var c = dragableList.current.childNodes;
        let ul = c[0].getElementsByTagName('ul')[0];
        let li = ul.getElementsByTagName('li');

        ul.addEventListener('drag', function () {
            let arr = Object.values(li);
            arr.filter((val) => {
                if (val.classList.contains("placeholder")) {
                    val.style.display = "none";
                }
            })
        });
        ul.style.listStyle = "none";
        ul.style.display = "flex";
        ul.style.columnGap = "10px";
    }, [])
    return (
        <>
            <div ref={dragableList} >
                <SortableList data={colors} />
            </div>
        </>
    )
}

export default DragableIconList