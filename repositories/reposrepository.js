function RepoRepository(Items) {
  async function readAll() {
    return await Items.findAll();
  }

  async function read(id) {
    return await Items.findById(id);
  }

  async function create(body) {
    const name = body.name;
    const author = body.author;
    const item = await Items.create({name, author});
    return { item: await item.get({ plaint: true }) };
  }

  async function deleteF(id) {
    return await Items.destroy({ where: { id: id } });
  }

  async function update(id, body) {
    const name = body.name;
    const author = body.author;
    const item = {name, author};
    await Items.update(item, { where: { id: id }, limit: 1 });
    return await read(id);
  }

  return { read, readAll, create, deleteF, update };
}
module.exports = RepoRepository;
