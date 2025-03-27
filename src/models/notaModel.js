import prisma from "../../prisma/client.js"

class NotaModel {
  getAll = async () => {
    return await prisma.nota.findMany();
  };

  getById = async (id) => {
    return await prisma.nota.findUnique({
      where: { id: Number(id) },
    });
  };

  create = async (titulo, conteudo) => {
    return await prisma.nota.create({
      data: {
        titulo,
        conteudo
      },
    });
  };

  update = async (id, titulo, conteudo, favorita, cor) => {
    try {
      const nota = await prisma.nota.update({
        where: { id },
        data: {
          titulo,
          conteudo,
          favorita,
          cor
        },
      })
      return nota
    } catch (error) {
      console.log("Error", error)
      throw error
    }
  };

  updateFavorite = async (id, favorita) => {
    try {
      const nota = await prisma.nota.update({
        where: { id },
        data: {
          favorita: favorita !== false ? true : false
        },
      });

      return nota;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const notaDeletada = await prisma.nota.delete({
        where: { id },
      });
      return notaDeletada;
    } catch (error) {
      console.log("Erro ao deletar a nota!", error);
      throw error;
    }
  };
}

export default new NotaModel();
