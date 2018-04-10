function CommitsRepository(Items) {
  async function readAll() {
    const result = await Items.findAll();
     return  result;
  }

  async function read(id) {
    return await Items.findById(id);
  }

  async function create(body) {
    const repoId = body.repoId;
    const message = body.message;
    const author = body.author;
    const item = await Items.create({repoId, message, author});
    return { item: await item.get({ plaint: true }) };
  }

  async function deleteF(id) {
    return await Items.destroy({ where: { id: id } });
  }

  async function update(id, body) {
    const repoId = body.repoId;
    const message = body.message;
    const author = body.author;
    const item = {repoId, message, author};
    await Items.update(item, { where: { id: id }, limit: 1 });
    return await read(id);
  }

  return { read, readAll, create, deleteF, update };
}

module.exports = CommitsRepository;
