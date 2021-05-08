pragma solidity ^0.5.17;
import "../library/Ownable.sol";
import "../library/PRC20.sol";
import "./IDanteToken.sol";

contract DanteToken is PRC20, Ownable, IDanteToken {
  function name() public pure returns (string memory) {
    return "DANTE";
  }

  function symbol() public pure returns (string memory) {
    return "DAT";
  }

  function decimals() public pure returns (uint8) {
    return 18;
  }

  function burn(address account, uint amount) public onlyOwner {
    _burn(account, amount);
  }

  function mint(address account, uint amount) public onlyOwner {
    _mint(account, amount);
  }

  function getBalance(address account) public view returns (uint256) {
    return balanceOf(account);
  }
}