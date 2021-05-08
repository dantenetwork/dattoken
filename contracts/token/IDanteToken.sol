pragma solidity ^0.5.17;

interface IDanteToken {
  function mint(address account, uint amount) external;
  function burn(address account, uint amount) external;
  function getBalance(address account) external view returns (uint256);
}