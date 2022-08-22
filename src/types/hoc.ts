export interface ReactHOC {
    <P>(WrappedComponent: React.ComponentType<P>): React.FC<P>
}