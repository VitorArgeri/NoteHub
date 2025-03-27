import notaModel from "../models/notaModel.js";

class NotaController {
  getAll = async (req, res) => {
    try {
      const notas = await notaModel.getAll();
      res.json(notas);
    } catch (error) {
      console.log(error)
      res.status(500).json({ erro: "Erro ao buscar notas" });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const nota = await notaModel.getById(id);
      res.json(nota)
    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: "Nota não encontrada " })
    }
  }

  create = async (req, res) => {
    const { titulo, conteudo } = req.body;
    try {
      if (!titulo || !conteudo) {
        return res.status(400).json({ erro: "Titulo e conteudo são obrigatória" });
      }

      const novaNota = await notaModel.create(titulo, conteudo);
      res.status(201).json(novaNota);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar nota" });
    }
  };

  updateFavorite = async (req, res) => {
    const { id } = req.params;
    const { favorita } = req.body;

    try {
      const notaAtualizada = await notaModel.updateFavorite(
        Number(id),
        favorita
      );

      if (!notaAtualizada) {
        return res.status(404).json({ erro: "Nota não encontrada!" });
      }

      res.json(notaAtualizada);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar nota!" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { titulo, conteudo, favorita, cor } = req.body;
    try {
      const notaAtualizada = await notaModel.update(
        Number(id),
        titulo,
        conteudo,
        favorita,
        cor
      );
      if (!notaAtualizada) {
        return res.status(404).json({ erro: "Nota não encontrada" });
      }
      res.json(notaAtualizada);
    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: "Erro ao atualizar nota" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;
    try {
      const sucesso = await notaModel.delete(Number(id));
      if (!sucesso) {
        return res.status(404).json({ erro: "Nota não encontrada" });
      }
      res.status(200).json({ message: "Nota deletada com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: "Erro ao deletar nota" });
    }
  };
}
export default new NotaController();