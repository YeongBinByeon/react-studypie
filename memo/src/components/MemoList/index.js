import MemoItem from "../MemoItem";

function MemoList({
  memos,
  setSelectedMemoIndex,
  selectedMemoIndex,
  deleteMemo,
}) {
  return (
    <div>
      {memos.map((memo, index) => {
        return (
          <MemoItem
            key={index}
            onClickItem={() => {
              setSelectedMemoIndex(index);
            }}
            onClickDelete={(e) => {
              deleteMemo(index);
              e.preventDefault();
              e.stopPropagation();
            }}
            index={index}
            setSelectedMemoIndex={setSelectedMemoIndex}
            isSelected={index === selectedMemoIndex}
            deleteMemo={deleteMemo}
          >
            {memo.title}
          </MemoItem>
        );
      })}
    </div>
  );
}

export default MemoList;
