const getList = async (ctx, next) => {
  const list = [
    'Alligator',
    'Bask',
    'Crocodilian',
    'Death Roll',
    'Eggs',
    'Jaws',
    'Reptile',
    'Solitary',
    'Tail',
    'Wetlands'
  ]

  ctx.body = list
}

export default {
  getList
}