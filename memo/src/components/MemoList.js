import MemoItem from "./MemoItem";

function MemoList({ memos, setSelectedMemoIndex, selectedMemoIndex }) {
  return (
    <div>
      {memos.map((memo, index) => {
        return (
          <MemoItem
            key={index}
            onClick={() => {
              setSelectedMemoIndex(index);
            }}
            index={index}
            setSelectedMemoIndex={setSelectedMemoIndex}
            isSelected={index === selectedMemoIndex}
          >
            {memo.title}
          </MemoItem>
        );
      })}
    </div>
  );
}

export default MemoList;
