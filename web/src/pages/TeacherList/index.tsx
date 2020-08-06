import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teacherNotFound, setTeacherNotFound] = useState('');
  const [spinnerActive, setSpinnerActive] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    setSpinnerActive('active');
    setTeacherNotFound('');
    setTeachers([]);

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    response.data.length === 0
      ? setTeacherNotFound('Nenhum professor encontrado com sua pesquisa.')
      : setTeacherNotFound('');

    setSpinnerActive('');
    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            required
            value={subject}
            onChange={e => {
              setSubject(e.target.value);
            }}
            optionLabel="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação física', label: 'Educação física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Inglês', label: 'Inglês' },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            required
            value={week_day}
            onChange={e => {
              setWeekDay(e.target.value);
            }}
            optionLabel="Dia"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input
            type="time"
            name="time"
            label="Horário"
            required
            value={time}
            onChange={e => {
              setTime(e.target.value);
            }}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        <div className={`loader-spinner ${spinnerActive}`}></div>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}

        <div className="teachers-not-found">
          <p>{teacherNotFound}</p>
        </div>
      </main>
    </div>
  );
}

export default TeacherList;
