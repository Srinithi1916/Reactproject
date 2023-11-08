const But=(props)=>
{
    return (<button className={`px-4 py-4 ${props.color}-600 rounded-lg`}>{props.label}
    {props.children}
    </button>
    );
};
export default But;