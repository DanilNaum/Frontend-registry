interface ArrowProps {
    turned : boolean
}

interface MultiselectProps {
    options : Map<string, boolean>,
    toggleOption : (key : string) => void
    id : string
    lable : string

    height : number
    theme? : Theme
}

interface SuggestedSearchProps extends MultiselectProps {
  setOuterInput : ( value : string ) => void
}

// Private Components

interface AnnounceProps {
  n : number
}

interface OptionProps {
  option : [string, boolean];
  toggleOption : () => void;

  highlighted : boolean;
  id : string;
  theme? : Theme
}


interface ListBoxPopUpProps {
  controller : MultiselectController,
  viewer : MultiselectViewer
  toggleOption : (key : string) => void;

  parentId : string;

  height : number;

  announce? : boolean;
  expanded? : boolean
  theme? : Theme

}

type MultiselectViewer = {
  indexOptions : string[],
  options : Map<string, boolean>
}

type MultiselectController = {
  highlighted : number | null,
  focusAt : () => FocusAt
  focusAtNum : () => number | null 
  loseFocus : () => void
  focusOnOption : (ind : number) => void
  focusOnMenu : () => void
  focusDown : (n : number) => void
  focusUp : (n : number) => void
  focusOnStart : () => void
  focusOnEnd : () => void
  focusAutocomplete : (full : string, lastChar : string) => void
  toggle : () => void
};