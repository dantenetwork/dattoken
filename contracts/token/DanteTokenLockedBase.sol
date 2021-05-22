pragma solidity ^0.5.17;
import "../library/Ownable.sol";
import "./IDanteToken.sol";
import "../library/SafeMath.sol";
import "../library/IPRC20.sol";

// locked tokens, disabled transfer functions
contract DanteTokenLocked is IDanteToken, IPRC20, Ownable {
  string _name;
  string _symbol;
  uint256 private _totalSupply;

  mapping (address => uint256) private _balances;

  constructor(string memory name, string memory symbol) public {
    _name = name;
    _symbol = symbol;
  }

  function name() public view returns (string memory) {
    return _name;
  }

  function symbol() public view returns (string memory) {
    return _symbol;
  }

  function decimals() public pure returns (uint8) {
    return 18;
  }

  function totalSupply() public view returns (uint256) {
    return _totalSupply;
  }

  function balanceOf(address account) public view returns (uint256) {
    return _balances[account];
  }

  function mint(address account, uint256 amount) public onlyOwner {
    require(account != address(uint160(0)), "DanteToken: mint to the zero address");

    _totalSupply = SafeMath.add(_totalSupply, amount);
    _balances[account] = SafeMath.add(_balances[account], amount);
    emit Transfer(address(uint160(0)), account, amount);
  }

  function burn(address account, uint256 amount) public onlyOwner{
    require(account != address(uint160(0)), "DanteToken: burn from the zero address");

    _balances[account] = SafeMath.sub(_balances[account], amount, "DanteToken: burn amount exceeds balance");
    _totalSupply = SafeMath.sub(_totalSupply, amount);
    emit Transfer(account, address(uint160(0)), amount);
  }

  function transfer(address recipient, uint256 amount) external returns (bool) {
    revert();
  }

  function allowance(address owner, address spender) external view returns (uint256) {
    return 0;
  }

  function approve(address spender, uint256 amount) external returns (bool) {
    revert();
  }

  function transferFrom(address sender, address recipient, uint256 amount) external returns (bool) {
    revert();
  }
}