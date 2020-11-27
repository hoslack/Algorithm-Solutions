// @ts-ignore

//Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Definition for a binary tree node.
  class TreeNode {
      val: number
      left: TreeNode | any
      right: TreeNode | any
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }

  const inorderTraversal = (root: TreeNode | null): number[] => {

    let tourist = root
    let solution: number[] = []

    while (tourist !== null) {
        let guide = tourist.left
        if (tourist.left !== null) {
            while (guide.right !== null && guide.right !== tourist) {
                guide = guide.right
            }
            if (guide.right === null) {
                guide.right = tourist
                tourist = tourist.left
            } else {
                guide.right = null
                solution.push(tourist.val)
                tourist = tourist.right
            }
        } else {
            solution.push(tourist.val)
            tourist = tourist.right
        }
    }
    return solution

}

export default inorderTraversal
