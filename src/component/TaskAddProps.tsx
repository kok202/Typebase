export default interface TaskAddProps{
    inputText : string;
    onChangeHandler : (event : React.ChangeEvent<HTMLInputElement>) => void;
    onClickHandler : (event : React.MouseEvent) => void;
}