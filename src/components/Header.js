import Search from './Search';

const Header = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="formHeader">
            <div className="Hdr-Content">
                <div className="heading-bg"><h2 className="heading">All Contact</h2> <br /></div>
                <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
        </div>
    );
};

export default Header;